<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EntrepriseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            $email = 'required|email|max:250|unique:entreprises,email,' . $this->get('id');
            $subdomain = 'nullable';
            $tenant = 'nullable';
        }else{
            $email = 'required|email|max:255|unique:entreprises,email';
            $subdomain = 'required|regex:/^[a-z0-9-]+$/|max:255|unique:domains,domain';
            $tenant = 'required|alpha_dash|max:255|unique:tenants,id';
        }

        return [
            'name' => 'required|string|max:250',
            'uid' => 'required|numeric|exists:users,id',
            'description' => 'nullable|string',
            'email' => $email,
            'phone' => 'nullable|numeric|digits_between:8,15',
            'address' => 'nullable|string',
            'user_licenses' => 'required|numeric|min:-1',
            'component_licenses' => 'required|numeric|min:-1',
            'status' => 'required|numeric',
            'tenant' => $tenant,
            'subdomain' => $subdomain,
        ];
    }
    
}
