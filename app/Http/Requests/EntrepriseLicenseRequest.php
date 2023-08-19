<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EntrepriseLicenseRequest extends FormRequest
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
        return [
            'entreprise_id' => 'required|numeric|exists:entreprises,id',
            'component_id' => 'required|numeric|exists:components,id',
            'license_limited' => 'required|boolean',
            'license_start_date' => 'nullable|required_if:license_limited,==,true|date_format:d/m/Y H:i:s',
            'license_end_date' => 'nullable|required_if:license_limited,==,true|date_format:d/m/Y H:i:s|after:license_start_date',
            'modules' => 'required|array',
            'permissions' => 'required|array',
            'status' => 'required|numeric',
        ];
    }
}
